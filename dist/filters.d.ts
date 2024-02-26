import { IFilter, FilterData, BaseFilterOption } from './filterTypes';
export declare class Filter implements IFilter {
    constructor(option?: FilterData | BaseFilterOption);
    name: string;
    displayName?: string;
    /**
    * 配置值
    */
    option: BaseFilterOption;
    toJSON(): FilterData;
    toString(): string;
}
/**
 * 反色滤镜
 */
export declare class InvertFilter extends Filter {
    constructor(option?: BaseFilterOption);
}
/**
 * 模糊滤镜
 */
export declare class BlurFilter extends Filter {
    constructor(option?: BaseFilterOption);
}
declare const filters: {
    InvertFilter: Filter;
};
export default filters;
