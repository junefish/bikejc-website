import {LL, Param, ParsedParam} from "next-utils/params";

export type Params = {
    ll: Param<LL>
    z: Param<number>
    h: Param<boolean>
    R: Param<boolean>
    S: Param<boolean>
    draw: Param<boolean>
}

export type ParsedParams = {
    ll: ParsedParam<LL>
    z: ParsedParam<number>
    h: ParsedParam<boolean>
    R: ParsedParam<boolean>
    S: ParsedParam<boolean>
    draw: ParsedParam<boolean>
}
