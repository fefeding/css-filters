import { IFilter, FilterData, BaseFilterOption } from './filterTypes';


export class Filter implements IFilter {
    constructor(option?: FilterData | BaseFilterOption) {
        if(option) {
            if(option instanceof BaseFilterOption) {
                this.option = option;
            }
            else {
                this.name = option.name;
                this.displayName = option.displayName;
                if(option.option) {
                    if(option.option instanceof BaseFilterOption) {
                        this.option = option.option;
                    }
                    else {
                        this.option = new BaseFilterOption(option.option);
                    }
                }
            }
        }
    }

    name: string;
    displayName?: string;

     /**
     * 配置值
     */
     option: BaseFilterOption;

    // 转成json
    toJSON(): FilterData {
        return {
            name: this.name || '',
            displayName: this.displayName || '',
            option: this.option.toJSON()
        }
    }

    toString(): string {
        if(!this.name) return '';
        return `${this.name}(${this.option.toString()})`;
    }
}

/**
 * 反色滤镜
 */
export class InvertFilter extends Filter {
    constructor(option?: BaseFilterOption) {
        super(option);
        this.name = 'invert';
        this.displayName = '反色';
    }
}

/**
 * 模糊滤镜
 */
export class BlurFilter extends Filter {
    constructor(option?: BaseFilterOption) {
        super(option);
        this.name = 'blur';
        this.displayName = '模糊';
    }
}


const filters = {
    InvertFilter: new Filter({
        value: '1'
    }),
};

export default filters;