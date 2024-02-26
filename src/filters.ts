import { IFilter, FilterData, BaseFilterOption, IBaseFilterOption } from './filterTypes';


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
     create(option?: IBaseFilterOption, name = this.name, displayName = this.displayName) {
        const data = new FilterData();
        data.name = name;
        data.displayName = displayName;
        data.option = option || this.option;
        const obj = new Filter(data);
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
 * 亮度滤镜 value: 0-100
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


const filters = {
    /**
     * 反色滤镜
     */
    invert: new InvertFilter(),
    /**
     * 亮度
     */
    blur: new BlurFilter(),
    /**
     * 亮度
     */
    brightness: new BrightnessFilter(),
    /**
     * 灰度
     */
    grayscale: new GrayscaleFilter(),
    /**
     * 复古
     */
    sepia: new SepiaFilter(),
    /**
     * 旋转滤镜
     */
    hueRotate: new HueRotateFilter(),
};

export default filters;