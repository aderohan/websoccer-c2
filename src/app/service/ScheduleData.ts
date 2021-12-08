import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'SMG',
    AwayTeam:'RRQ',HomeScore:0,AwayScore:3,
    RefName:'Albert',notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'EVOS',
    AwayTeam:'BTR',HomeScore:3,AwayScore:2,
    RefName:'Wannn',notes:'EPAUSE'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'BTR',
    AwayTeam:'AURA',HomeScore:2,AwayScore:3,
    RefName:'Renbo',notes:'Pertandingan ada kerusuhan'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'RRQ',
    AwayTeam:'EVOS',HomeScore:3,AwayScore:0,
    RefName:'KB',notes:'EZ'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'AURA',
    AwayTeam:'RRQ',HomeScore:2,AwayScore:3,
    RefName:'Fercix',notes:'NGELEG'},
]

export const TEAMS:Team [] = [
    {id:1,name:'EVOS',type:'Over 30'},
    {id:2,name:'AURA',type:'Over 30'},
    {id:3,name:'RRQ',type:'Over 30'},
    {id:4,name:'SMG',type:'Over 30'},
    {id:5,name:'BTR',type:'Over 30'},
    {id:6,name:'GEEK',type:'Over 30'},
]