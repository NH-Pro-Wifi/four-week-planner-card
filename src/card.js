import { html, LitElement } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { DateTime, Settings as LuxonSettings, Info as LuxonInfo } from 'luxon';
import styles from './card.styles';
import clear_night from 'data-url:./icons/clear_night.png';
import cloudy from 'data-url:./icons/cloudy.png';
import fog from 'data-url:./icons/fog.png';
import lightning from 'data-url:./icons/lightning.png';
import storm from 'data-url:./icons/storm.png';
import storm_night from 'data-url:./icons/storm_night.png';
import mostly_cloudy from 'data-url:./icons/mostly_cloudy.png';
import mostly_cloudy_night from 'data-url:./icons/mostly_cloudy_night.png';
import heavy_rain from 'data-url:./icons/heavy_rain.png';
import rainy from 'data-url:./icons/rainy.png';
import snowy from 'data-url:./icons/snowy.png';
import mixed_rain from 'data-url:./icons/mixed_rain.png';
import sunny from 'data-url:./icons/sunny.png';
import windy from 'data-url:./icons/windy.svg';

const ICONS = {
  'clear-day': sunny,
  'clear-night': clear_night,
  cloudy,
  overcast: cloudy,
  fog,
  hail: mixed_rain,
  lightning,
  'lightning-rainy': storm,
  'partly-cloudy-day': mostly_cloudy,
  'partly-cloudy-night': mostly_cloudy_night,
  partlycloudy: mostly_cloudy,
  pouring: heavy_rain,
  rain: rainy,
  rainy,
  sleet: mixed_rain,
  snow: snowy,
  snowy,
  'snowy-rainy': mixed_rain,
  sunny,
  wind: windy,
  windy,
  'windy-variant': windy
};

const ICONS_NIGHT = {
  ...ICONS,
  sunny: clear_night,
  partlycloudy: mostly_cloudy_night,
  'lightning-rainy': storm_night
};

export class FourWeekPlannerCard extends LitElement {
    static styles = styles;

    _initialized = false;
    _loading = 0;
    _events = {};
    _calendarEvents = {};
    _calendarMap = []
    _jsonDays = '';
    _calendars;
    _numberOfDays;
    _updateInterval;
    _language;
    _dateFormat;
    _timeFormat;
    _locationLink;
    _startDate;
    _hideWeekend;
    _startingDay;
    _startingDayOffset;
    _loader;
    _hardrefresh = false;
    _grid_rows = 0;
    _endDate;
    _weatherForecast = null;

    /**
     * Get config element
     *
     * @returns {HTMLElement}
     */
    static getConfigElement() {
        // Create and return an editor element
        return document.createElement("week-planner-card-editor-2");
    }

    /**
     * Get stub config
     *
     * @returns {}
     */
    static getStubConfig() {
        return {
            calendars: [],
            days: 7,
            startingDay: 'today',
            startingDayOffset: 0,
            hideWeekend: false,
            noCardBackground: false,
            compact: false,
            weather: {
                showCondition: true,
                showTemperature: false,
                showLowTemperature: false,
                useTwiceDaily: false,
            },
            locale: 'en',
            showLocation: false,
            hidePastEvents: false,
            hideDaysWithoutEvents: false,
            hideTodayWithoutEvents: false,
            combineSimilarEvents: false,
            showLegend: false
        };
    }

    /**
     * Get properties
     *
     * @return {Object}
     */
    static get properties() {
        return {
            _days: { type: Array },
            _config: { type: Object },
            _error: { type: String },
            _currentEventDetails: { type: Object },
        }
    }

    /**
     * Set configuration
     *
     * @param {Object} config
     */
    setConfig(config) {
        this._config = config;

        if (!config.calendars) {
            throw new Error('No calendars are configured');
        }

        this._title = config.title ?? null;
        this._calendars = config.calendars;
        this._hideWeekend = config.hideWeekend ?? false;
        this._startingDay = config.startingDay ?? 'today';
        this._startingDayOffset = config.startingDayOffset ?? 0;
        this._startDate = this._getStartDate();
        this._updateInterval = config.updateInterval ?? 60;
        this._dayFormat = config.dayFormat ?? null;
        this._dateFormat = config.dateFormat ?? 'cccc d LLLL yyyy';
        this._timeFormat = config.timeFormat ?? 'HH:mm';
        this._weather = this._getWeatherConfig(config.weather);

        if (config.locale) {
            LuxonSettings.defaultLocale = config.locale;
        }
        this._language = Object.assign(
            {},
            {
                fullDay: 'Entire day',
                noEvents: 'No events',
                moreEvents: 'More events',
                today: 'Today',
                tomorrow: 'Tomorrow',
                yesterday: 'Yesterday',
                sunday: LuxonInfo.weekdays('long')[6],
                monday: LuxonInfo.weekdays('long')[0],
                tuesday: LuxonInfo.weekdays('long')[1],
                wednesday: LuxonInfo.weekdays('long')[2],
                thursday: LuxonInfo.weekdays('long')[3],
                friday: LuxonInfo.weekdays('long')[4],
                saturday: LuxonInfo.weekdays('long')[5]
            },
            config.texts ?? {}
        );
    }

    /**
     * Render
     *
     * @return {Object}
     */
    render() {
        if (!this._loader) {
            this._loader = this._getLoader();
        }

        if (!this._initialized) {
            this._initialized = true;
            return this._waitForHassAndConfig();
        }

        if (!this._hardrefresh) {
            this._hardrefresh = true;
            window.setTimeout(()=>{
                location.reload(true);
            }, 3600 * 1000);
        }

        const itemTemplates = []
        let daysinrow = 7
        let weeks = 4
        for (let k=0; k < weeks; k++) {
            for (let j=0; j< this._calendarMap[k * daysinrow].length; j++) {
                for( let i=0; i < daysinrow; i++) {
                    let index = daysinrow * k + i
                    if (j == 0) {
                        let date_classes = ['grid-item','date']
                        if (this._isSameDay(this._calendarMap[index][j]['date'], DateTime.now().startOf('day'))){
                            date_classes.unshift('today') 
                        }
                        let weather = null
                        if (this._calendarMap[index][j]['weather']) {
                            weather =  html`<span class="icon"><img class="icon" src="${this._calendarMap[index][j]['weather']['icon']}" alt="${this._calendarMap[index][j]['weather']['condition']}"></span><span class="high"> H: ${this._calendarMap[index][j]['weather']['temperature']}</span>`
                        }
                        itemTemplates.push(html`<div class="${date_classes.join(' ')}"><span class="text">${this._calendarMap[index][j]['date'].weekdayLong}</span><span class="month">${this._calendarMap[index][j]['date'].monthLong}</span><span class="number">${this._calendarMap[index][j]['date'].day}</span>${weather}</div>`);
                    } else {
                        let item = this._calendarMap[index][j]
                        if (item == null ) {
                            itemTemplates.push(html`<div class="grid-item"></div>`);
                        } else if (item.title.substring(0,4) == 'x - '){
                            // pass    
                        } else  {
                            itemTemplates.push(html`<div class="grid-item event" style="grid-column: span ${item.span + 1};"><p>${item.title}</p></div>`);
                        }
                    }
                }
            }
        }
        
        this._grid_rows = 0;
        for (let k=0; k < weeks; k++) {
            this._grid_rows += this._calendarMap[k * daysinrow].length
        }

        return html`
            <ha-card id="ha-card" class="" style="">
                <div class="card-content">
                    ${itemTemplates}
                </div>
                ${this._loader}
            </ha-card>
        `;
    }

    updated() {
        this.shadowRoot.querySelector("ha-card").style.setProperty('--page-height', Math.max(window.innerHeight, 1080) + "px")
        this.shadowRoot.querySelector("ha-card").style.setProperty('--page-width', Math.max(window.innerWidth, 1920) + "px")
        this.shadowRoot.querySelector("ha-card").style.setProperty('--rows', this._grid_rows)

      }

    _getLoader() {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.style.display = 'none';
        return loader;
    }

    _updateLoader() {
        if (this._loading > 0) {
            this._loader.style.display = 'inherit';
        } else {
            this._loader.style.display = 'none';
        }
    }


    _waitForHassAndConfig() {
        if (!this.hass || !this._calendars) {
            window.setTimeout(() => {
                this._waitForHassAndConfig();
            }, 50)
            return;
        }

        this._updateEvents();
    }

    _Empty2DArray(rows, cols) {
        const array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < cols; j++) {
                array[i][j] = null;
            }
        }
        return array;
    }

    _updateEvents() {
        if (this._loading > 0) {
            return;
        }

        this._loading++;
        this._updateLoader();
        this._error = '';
        this._events = {};
        let eventsperday = 1;
        let weeksperview = 4;
        let daysperweek = 7;
        this._startDate = this._getStartDate();
        let startDate = this._startDate;
        this._calendarMap = this._Empty2DArray( daysperweek * weeksperview, (eventsperday+1) );
        this._endDate = this._startDate.plus({ days: daysperweek * weeksperview });

        for (let i = 0; i < 7 * weeksperview ; i++) {
            this._calendarMap[i][0] = {
                'date': startDate.plus({days: i}),
                'weather': null
            };

        }

        if (this._weather && this._weatherForecast === null) {
            this._subscribeToWeatherForecast();
        }

        let calendarNumber = 0;
        this._calendars.forEach(calendar => {
            if (!calendar.entity || !this.hass.states[calendar.entity]) {
                return;
            }

            if (!calendar.name) {
                calendar = {
                    ...calendar,
                    name: this.hass.formatEntityAttributeValue(this.hass.states[calendar.entity], 'friendly_name')
                }
            }
            let calendarSorting = calendarNumber;
            this._loading++;
            this.hass.callApi(
                'get',
                'calendars/' + calendar.entity + '?start=' + encodeURIComponent(startDate.toISO()) + '&end=' + encodeURIComponent(this._endDate.toISO())
            ).then(response => {
                response.forEach(event => {
                    let startDate = this._convertApiDate(event.start);
                    let endDate = this._convertApiDate(event.end);
                    
                    // Update start and end date if events do beyond the calender window
                    if ( this._startDate > startDate)
                        startDate = this._startDate
                    if ( this._endDate < endDate)
                        endDate = this._endDate

                    startDate = startDate.startOf('day')
                    endDate = endDate.startOf('day')

                    let title = event.summary
                    // if the endDate is greater then end of week, we are going to loop over each week to add the event
                    let e = endDate
                    while(endDate > this._getEndofWeekDate(startDate)){
                        endDate = this._getEndofWeekDate(startDate)
                        this._pushCalender(title, startDate, endDate)
                        startDate = this._getWeekDayDate(startDate, 1).plus({days: 7})
                        if (e < endDate.plus({days: 7})) {
                            endDate = e
                        } else {
                            endDate = endDate.plus({days: 7})
                        }
                    }
                    this._pushCalender(title, startDate, e)
                });

                this._loading--;
            }).catch(error => {
                if (!error.error) {
                    console.log(error);
                }
                this._error = 'Error while fetching calendar: ' + error.error;
                this._loading = 0;
                throw new Error(this._error);
            }).finally(() => {
                //pass
            });
            calendarNumber++;
            
        });

        let checkLoading = window.setInterval(() => {
            if (this._loading === 0) {
                clearInterval(checkLoading);
                this._updateLoader();
                if (!this._error) {
                    this._mergeCalenderWeather()
                    this._days = this._calendarMap;
                    console.log(this._days)
                }

                window.setTimeout(() => {
                    this._updateEvents();
                }, this._updateInterval * 1000);
            }
        }, 50);

        this._loading--;
    }

    _mergeCalenderWeather(){
        const weatherState = this._weather ? this.hass.states[this._weather.entity] : null;
        for (let i = 0; i < this._calendarMap.length; i++) {
            this._weatherForecast?.forEach((forecast) => {
                // Only use day time forecasts
                if (forecast.hasOwnProperty('is_daytime') && forecast.is_daytime === false) {
                    return;
                }
    
                const dateKey = DateTime.fromISO(forecast.datetime).toISODate();
                if (dateKey == this._calendarMap[i][0]['date'].toISODate()) { 
                    this._calendarMap[i][0]['weather'] = {
                        icon: this._getWeatherIcon(forecast),
                        condition: this.hass.formatEntityState(weatherState, forecast.condition),
                        temperature: this.hass.formatEntityAttributeValue(weatherState, 'temperature', forecast.temperature),
                        templow: this.hass.formatEntityAttributeValue(weatherState, 'templow', forecast.templow)
                    };
                }
            });
        }
    }

    _getWeatherIcon(weatherState) {
        const condition = weatherState?.condition;
        if (!condition) {
            return null;
        }

        const state = condition.toLowerCase();
        return ICONS[state];
    }

    _pushCalender(title, startDate, endDate){
        let startdaykey = Math.min(this._getDateDiff(this._startDate, startDate), 27)
        let spanDays = this._getDateDiff(startDate, endDate)
                    
        let startdayrowkey = null
        for(let i = 0; i < this._calendarMap[startdaykey].length; i++) {
            if (this._calendarMap[startdaykey][i] === null) {
                startdayrowkey = i;
                break;
            }
        }

        // If we cant find an empty row add a new row 
        if (startdayrowkey == null) {
            startdayrowkey = this._calendarMap[startdaykey].length;
            // Find the Dates that mark the begining and of of the week the event starts in 
            let startOfWeek = this._getWeekDayDate(startDate, 1);
            let endOfWeek = this._getEndofWeekDate(startDate);
            // Find the indexes in the month array and push in null
            let startOfWeekIndex = this._getDateDiff(this._startDate, startOfWeek)
            let endOfWeekIndex = this._getDateDiff(this._startDate, endOfWeek)
            for (let i = startOfWeekIndex; i <= endOfWeekIndex; i++) {
                this._calendarMap[i].push(null)
            }
        }

                    
        this._calendarMap[startdaykey][startdayrowkey] = {
            'title': title,
            'span': spanDays
        };

        for(let i = startdaykey + 1; i < startdaykey + spanDays + 1; i++){
            if (i + 1 >= this._calendarMap.length) {
                break;
            } else {
                this._calendarMap[i][startdayrowkey] = {'title': 'x - ' + title}
            }
        }
    }

    _getStartDate(alternativeStartingDay) {
        let startDate = DateTime.now();

        switch (alternativeStartingDay ?? this._startingDay) {
            case 'yesterday':
                startDate = startDate.minus({ days: 1 })
                break;
            case 'tomorrow':
                startDate = startDate.plus({ days: 1 })
                break;
            case 'sunday':
                startDate = this._getWeekDayDate(startDate, 7);
                break;
            case 'monday':
                startDate = this._getWeekDayDate(startDate, 1);
                break;
            case 'tuesday':
                startDate = this._getWeekDayDate(startDate, 2);
                break;
            case 'wednesday':
                startDate = this._getWeekDayDate(startDate, 3);
                break;
            case 'thursday':
                startDate = this._getWeekDayDate(startDate, 4);
                break;
            case 'friday':
                startDate = this._getWeekDayDate(startDate, 5);
                break;
            case 'saturday':
                startDate = this._getWeekDayDate(startDate, 6);
                break;
            case 'month':
                startDate = startDate.startOf('month');
                break;
        }

        if (this._startingDayOffset !== 0) {
            startDate = startDate.plus({ days: this._startingDayOffset });
        }

        if (this._hideWeekend && startDate.weekday >= 6) {
            startDate = this._getStartDate('monday');
        }

        return startDate.startOf('day');
    }

    _getWeekDayDate(currentDate, weekday) {
        const currentWeekDay = currentDate.weekday;
        if (currentWeekDay > weekday) {
            return currentDate.minus({ days: currentWeekDay - weekday })
        }
        if (currentWeekDay < weekday) {
            return currentDate.minus({ days: 7 - weekday + currentWeekDay })
        }

        return currentDate;
    }

    _getEndofWeekDate(currentDate) {
        const currentWeekDay = currentDate.weekday;
        return currentDate.plus({ days: 7 - currentWeekDay })
    }

    _convertApiDate(apiDate) {
        let date = null;

        if (apiDate) {
            if (apiDate.dateTime) {
                date = DateTime.fromISO(apiDate.dateTime);
            } else if (apiDate.date) {
                date = DateTime.fromISO(apiDate.date);
            }
        }

        return date;
    }

    _isSameDay(date1, date2) {
        if (date1 === null && date2 === null) {
            return true;
        }

        if (date1 === null || date2 === null) {
            return false;
        }

        return date1.day === date2.day
            && date1.month === date2.month
            && date1.year === date2.year
    }

    _getDateDiff(date1, date2){

        if (date1 === null && date2 === null) {
            return true;
        }

        if (date1 === null || date2 === null) {
            return false;
        }

        if (date1 > date2) {
            throw new Error("Bad Dates");
        }

        date1=date1.startOf('day')
        date2=date2.startOf('day')
        let i = 0
        while (!this._isSameDay(date1, date2)) {
            i = i + 1
            date1 = date1.plus({days: 1})
        }
        return i
    }

    _isToday(date) {
        const today = DateTime.now().startOf('day');
        return this._isSameDay(date, today);
    }

    _isTomorrow(date) {
        const tomorrow = DateTime.now().startOf('day').plus({ days: 1 });
        return this._isSameDay(date, tomorrow);
    }

    _isYesterday(date) {
        const yesterday = DateTime.now().startOf('day').minus({ days: 1 });
        return this._isSameDay(date, yesterday);
    }

    _getWeekDayText(date) {
        if (this._language.today && this._isToday(date)) {
            return this._language.today;
        } else if (this._language.tomorrow && this._isTomorrow(date)) {
            return this._language.tomorrow;
        } else if (this._language.yesterday && this._isYesterday(date)) {
            return this._language.yesterday;
        } else {
            const weekDays = [
                this._language.sunday,
                this._language.monday,
                this._language.tuesday,
                this._language.wednesday,
                this._language.thursday,
                this._language.friday,
                this._language.saturday,
                this._language.sunday,
            ];
            const weekDay = date.weekday;
            return weekDays[weekDay];
        }
    }

    _subscribeToWeatherForecast() {
        this._loading++;
        this._updateLoader();
        let loadingWeather = true;
        this.hass.connection.subscribeMessage((event) => {
            this._weatherForecast = event.forecast ?? [];
            if (loadingWeather) {
                this._loading--;
                loadingWeather = false;
            }
        }, {
            type: 'weather/subscribe_forecast',
            forecast_type:  'daily',
            entity_id: this._weather.entity
        });
    }

    _getWeatherConfig(weatherConfiguration) {
        if (
            !weatherConfiguration
            || typeof weatherConfiguration !== 'string'
            && typeof weatherConfiguration !== 'object'
        ) {
            return null;
        }

        let configuration = {
            entity: null,
            showCondition: true,
            showTemperature: false,
            showLowTemperature: false
        };
        if (typeof weatherConfiguration === 'string') {
            configuration.entity = weatherConfiguration;
        } else {
            Object.assign(configuration, weatherConfiguration);
        }

        if (!configuration.hasOwnProperty('entity') || configuration.entity === null) {
            return null;
        }

        return configuration;
    }
}
