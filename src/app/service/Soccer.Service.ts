import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE,TEAMS } from "./ScheduleData"; 

@Injectable({
    providedIn: 'root',
})
export class SoccerService {
    getSchedule():any{
        return Promise.resolve(SEASON_SCHEDULE)
    }
    getTeam():any{
        return Promise.resolve(TEAMS)
    }
    private ComputeRankings(){

    }
}