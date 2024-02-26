
/**
 * 滤镜数据
 */
export class FilterData {
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

export interface IBaseFilterOption {
    value?: string|number|object;
}

export interface IFilterOption extends IBaseFilterOption {
    toString(): string;
    toJSON?(): object;
}

export class BaseFilterOption implements IFilterOption {
    constructor(option?: IBaseFilterOption | string | number) {
        if(option) {
            if(typeof option === 'string' || typeof option === 'number') {
                this.value = option;
            }
            else {
                this.value = option.value;
            }
        }
    }

    value?: string|number|object;

    toString(): string {
        return this.value.toString();
    }

    toJSON?(): object {
        return {
            value: this.value
        }
    }
}

export class ShadowFilterOption extends BaseFilterOption {
    constructor(option?: IBaseFilterOption | string | number) {
        super(option);
        if(option) {
            if(typeof option === 'string' || typeof option === 'number') {
                this.value = option;
            }
            else {
                this.value = option.value;
            }
        }
    }

    value: 
}

/**
 * 滤镜接口
 */
export interface IFilter extends FilterData {

    /**
     * 转成css
     */
    toString?(): string;

    // 转成json
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
    get(name: string): IFilter|undefined;

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

    // 转成json
    toJSON?(): Array<IFilter>;

    /**
     * 转成css
     */
    toString(): string;
}