import { IFilter, FilterData, BaseFilterOption, IBaseFilterOption, ShadowFilterOption, IShadowFilterOptionData, ShadowFilterOptionValue } from './filterTypes';


export class Filter implements IFilter {
    constructor(option?: BaseFilterOption | FilterData) {
        if(option) {
            
            if(option instanceof FilterData) {
                this.name = option.name;
                this.displayName = option.displayName;
                option = option.option;
            }

            if(option instanceof BaseFilterOption) {
                this.option = option;
            }
            else if(typeof option === 'object') {
                this.option = new BaseFilterOption(option);
            }
        }
    }

    name: string;
    displayName?: string;

     /**
     * 配置值
     */
     option: BaseFilterOption;

     /**
      * 创建同类型的滤镜
      * @param option 滤镜参数
      * @returns 
      */
     create(option: IBaseFilterOption = this.option, name = this.name, displayName = this.displayName, filterType = Filter) {
        const data = new FilterData();
        data.name = name;
        data.displayName = displayName;
        // @ts-ignore
        data.option = option.clone? option.clone(): option;
        const obj = new filterType(data);
        return obj;
     }

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
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value: 1}, option);
        super(option);
    }
    name = 'invert';
    displayName = '反色';
}

/**
 * 模糊滤镜 value: 4px
 */
export class BlurFilter extends Filter {
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value:  '4px'}, option);
        super(option);
    }
    name = 'blur';
    displayName?: string = '模糊';
}


/**
 * 亮度滤镜 value: 0-1
 */
export class BrightnessFilter extends Filter {
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value:  2}, option);
        super(option);
    }
    name = 'brightness';
    displayName?: string = '亮度';
}
/**
 * 灰度滤镜 value: 0-1
 */
export class GrayscaleFilter extends Filter {
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value:  1}, option);
        super(option);
    }
    name = 'grayscale';
    displayName?: string = '灰度';
}

/**
 * 复古滤镜 value: 0-1
 */
export class SepiaFilter extends Filter {
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value:  1}, option);
        super(option);
    }
    name = 'sepia';
    displayName?: string = '复古';
}
/**
 * 旋转滤镜 value: 0-360deg 角度 或 弧度 0-2*Math.PI rad
 */
export class HueRotateFilter extends Filter {
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value: '240deg'}, option);
        super(option);
    }
    name = 'hue-rotate';
    displayName?: string = '旋转';
}

/**
 * 透明度 value: 0-1
 */
export class OpacityFilter extends Filter {
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value: 0.8 }, option);
        super(option);
    }
    name = 'opacity';
    displayName?: string = '透明度';
}

/**
 * 阴影滤镜 
 */
export class DropShadowFilter extends Filter {
    constructor(option?: ShadowFilterOption) {
        
        if(!option) option = new ShadowFilterOption();

        option.value = new ShadowFilterOptionValue(option.value || {
            x: '0',
            y: '0',
            blur: '4px',
            color: '#000'
        });
        super(option);
    }
    name = 'drop-shadow';
    displayName?: string = '阴影';
    declare value: ShadowFilterOptionValue;

    /**
      * 创建同类型的滤镜
      * @param option 滤镜参数
      * @returns 
      */
    create(option = this.option as ShadowFilterOption, name = this.name, displayName = this.displayName): DropShadowFilter {
        const data = new ShadowFilterOption(option);        
        const obj = new DropShadowFilter(data);
        obj.name = name;
        obj.displayName = displayName;
        return obj;
    }
}

/**
 * 对比度滤镜  value: 2
 */
export class ContrastFilter extends Filter {
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value: 2}, option);
        super(option);
    }
    name = 'contrast';
    displayName?: string = '对比度';
}


/**
 * 饱和度 0-无穷 ,一般取0-1
 */
export class SaturateFilter extends Filter {
    constructor(option?: IBaseFilterOption) {
        option = Object.assign({ value: 3}, option);
        super(option);
    }
    name = 'saturate';
    displayName?: string = '饱和度';
}


const filters = {
    /**
     * 反色滤镜
     */
    invert: new InvertFilter(),
    /**
     * 模糊滤镜 value: 4px
     */
    blur: new BlurFilter(),
    /**
     * 亮度滤镜 value: 0-1
     */
    brightness: new BrightnessFilter(),
    /**
     * 灰度滤镜 value: 0-1
     */
    grayscale: new GrayscaleFilter(),
    /**
     * 复古滤镜 value: 0-1
     */
    sepia: new SepiaFilter(),
    /**
     * 旋转滤镜
     */
    hueRotate: new HueRotateFilter(),
    /**
     * 阴影
     */
    dropShadow: new DropShadowFilter(),
    /**
     * 透明度
     */
    opacity: new OpacityFilter(),
    /**
     * 对比度
     */
    contrast: new ContrastFilter(),
    /**
     * 饱和度 0-无穷 ,一般取0-1
     */
    saturate: new SaturateFilter(),
};

export default filters;
