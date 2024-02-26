/**
 * 滤镜数据
 */
export declare class FilterData {
    /**
     * 名称
     */
    name: string;
    /**
     * 中文名
     */
    displayName?: string;
    /**
     * 配置值
     */
    option: BaseFilterOption;
}
export interface IFilterCommon {
    toString(): string;
    toJSON?(): object;
    clone?(): object;
}
export interface IBaseFilterOption {
    value?: string | number | object;
}
export type IFilterOption = IBaseFilterOption & IFilterCommon;
export declare class BaseFilterOption implements IFilterOption {
    constructor(option?: IBaseFilterOption | string | number);
    value?: string | number | object;
    toString(): string;
    toJSON?(): object;
    clone?(): BaseFilterOption;
}
export interface IShadowFilterOptionData {
    x: string;
    y: string;
    blur: string;
    color: string;
}
export declare class ShadowFilterOptionValue implements IShadowFilterOptionData, IFilterCommon {
    constructor(data?: IShadowFilterOptionData);
    x: string;
    y: string;
    blur: string;
    color: string;
    toJSON(): IShadowFilterOptionData;
    toString(): string;
    clone(): ShadowFilterOptionValue;
}
export declare class ShadowFilterOption extends BaseFilterOption {
    constructor(option?: IShadowFilterOptionData);
    value: IShadowFilterOptionData;
    toString(): string;
}
/**
 * 滤镜接口
 */
export interface IFilter extends FilterData {
    /**
     * 转成css
     */
    toString?(): string;
    toJSON?(): FilterData;
    /**
      * 创建同类型的滤镜
      * @param option 滤镜参数
      * @returns
      */
    create(option?: IBaseFilterOption, name?: string, displayName?: string): IFilter;
}
export type FilterType = IFilter | string;
export interface IFilterManager {
    /**
     * 所有滤镜
     */
    filters: Array<IFilter>;
    /**
     * 根据滤镜名获取滤镜对象
     * @param name
     * @returns
     */
    get(name: string): IFilter | undefined;
    /**
     * 当前滤镜个数
     */
    get count(): number;
    /**
     * 加入滤镜
     * @param filter
     */
    add(filter: FilterType | Array<FilterType>): void;
    /**
     * 移除滤镜
     * @param filter
     */
    remove(filter: FilterType | Array<FilterType>): void;
    /**
     * 清空滤镜
     */
    clear(): void;
    toJSON?(): Array<IFilter>;
    /**
     * 转成css
     */
    toString(): string;
}
