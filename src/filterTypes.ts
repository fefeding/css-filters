
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

export interface IFilterCommon {
    toString(): string;
    toJSON?(): object;
    clone?(): object;
}

export interface IBaseFilterOption {
    value?: string|number|object;
}

export type IFilterOption = IBaseFilterOption & IFilterCommon ;

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

    clone?() {
        const obj = new BaseFilterOption();
        // @ts-ignore
        if(this.value && this.value.clone) obj.value = this.value.clone();
        else obj.value = this.value;

        return obj;
    }
}

export interface IShadowFilterOptionData {
    x: string;
    y: string;
    blur: string;
    color: string;
}

export class ShadowFilterOptionValue implements IShadowFilterOptionData, IFilterCommon {
    constructor(data?: IShadowFilterOptionData) {
        if(data) {
            this.x = data.x;
            this.y = data.y;
            this.blur = data.blur;
            this.color = data.color;
        }
    }
    x: string;
    y: string;
    blur: string;
    color: string;
    toJSON(): IShadowFilterOptionData {
        return {
            x: this.x,
            y: this.y,
            blur: this.blur||'',
            color: this.color||''
        }
    }
    toString(): string {
        return `${this.x} ${this.y} ${this.blur||0} ${this.color||'#000'}`; 
    }

    clone() {
        return new ShadowFilterOptionValue(this);
    }
}

export class ShadowFilterOption extends BaseFilterOption {
    constructor(option?: IShadowFilterOptionData | ShadowFilterOption) {
        super();
        if(option) {
            // @ts-ignore
            if(option instanceof ShadowFilterOption || option.value) this.value = new ShadowFilterOptionValue(option.value);
            else this.value = new ShadowFilterOptionValue(option);
        }
    }

    declare value: IShadowFilterOptionData;

    toString(): string {
        return this.value.toString();
    }
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

export type FilterType = IFilter | FilterData | string;

export interface IFilterManager {
    /**
     * 所有滤镜
     */
    filters: Array<IFilter>;
    
    /**
     * 绑定的dom否元素对象
     */
    target?: {
        style: any
    };

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

    /**
     * 生效
     * @param target  
     */
    apply(target?: any): void;
}