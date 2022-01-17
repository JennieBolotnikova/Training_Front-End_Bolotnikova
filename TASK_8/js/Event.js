class Event{
    date;
    time;
    name;
    importance;
    notes;
    /**
     *
     * @param dataEvent {Date}
     * @param timeEvent {Date}
     * @param nameEvent{String}
     * @param importanceEvent {String}
     * @param notesEvent {String}
     */
    constructor(dataEvent, timeEvent,
                nameEvent, importanceEvent, notesEvent) {
        this.date = dataEvent
        this.time = timeEvent
        this.name = nameEvent
        this.importance = importanceEvent
        this.notes= notesEvent
    }

    get date(){return this.date}
    get time(){return this.time}
    get name(){return this.name}
    get importance(){return this.importance}
    get notes(){return this.notes}

    set date(value){this.date = value}
    set time(value){this.time = value}
    set name(value){this.name = value}
    set importance(value){this.importance = value}
    set notes(value){this.notes = value}
}