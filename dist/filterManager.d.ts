import { FilterType, IFilter, IBaseFilterOption, IFilterManager } from './filterTypes';
export default class CSSFilters implements IFilterManager {
    constructor(filters?: IFilter[]);
    filters: IFilter[];
    /**
     * 当前滤镜个数
     */
    get count(): number;
    /**
     * 根据滤镜名获取滤镜对象
     * @param name
     * @returns
     */
    get(name: string): IFilter | undefined;
    clear(): void;
    /**
     * 添加滤镜
     * @param filter
     */
    add(filter: FilterType | Array<FilterType>, option?: IBaseFilterOption): void;
    /**
     * 移除滤镜
     * @param filter
     */
    remove(filter: FilterType | Array<FilterType>): void;
    toJSON(): IFilter[];
    toString(): string;
}
