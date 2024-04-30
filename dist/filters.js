import { FilterData, BaseFilterOption, ShadowFilterOption, ShadowFilterOptionValue } from './filterTypes';
export class Filter {
    constructor(option) {
        if (option) {
            if (option instanceof FilterData) {
                this.name = option.name;
                this.displayName = option.displayName;
                option = option.option;
            }
            if (option instanceof BaseFilterOption) {
                this.option = option;
            }
            else if (typeof option === 'object') {
                this.option = new BaseFilterOption(option);
            }
        }
    }
    name;
    displayName;
    /**
    * 配置值
    */
    option;
    /**
     * 创建同类型的滤镜
     * @param option 滤镜参数
     * @returns
     */
    create(option = this.option, name = this.name, displayName = this.displayName, filterType = Filter) {
        const data = new FilterData();
        data.name = name;
        data.displayName = displayName;
        // @ts-ignore
        data.option = option.clone ? option.clone() : option;
        const obj = new filterType(data);
        return obj;
    }
    // 转成json
    toJSON() {
        return {
            name: this.name || '',
            displayName: this.displayName || '',
            option: this.option.toJSON()
        };
    }
    toString() {
        if (!this.name)
            return '';
        return `${this.name}(${this.option.toString()})`;
    }
}
/**
 * 反色滤镜
 */
export class InvertFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 1 }, option);
        super(option);
    }
    name = 'invert';
    displayName = '反色';
}
/**
 * 模糊滤镜 value: 4px
 */
export class BlurFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: '4px' }, option);
        super(option);
    }
    name = 'blur';
    displayName = '模糊';
}
/**
 * 亮度滤镜 value: 0-1
 */
export class BrightnessFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 2 }, option);
        super(option);
    }
    name = 'brightness';
    displayName = '亮度';
}
/**
 * 灰度滤镜 value: 0-1
 */
export class GrayscaleFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 1 }, option);
        super(option);
    }
    name = 'grayscale';
    displayName = '灰度';
}
/**
 * 复古滤镜 value: 0-1
 */
export class SepiaFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 1 }, option);
        super(option);
    }
    name = 'sepia';
    displayName = '复古';
}
/**
 * 旋转滤镜 value: 0-360deg 角度 或 弧度 0-2*Math.PI rad
 */
export class HueRotateFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: '240deg' }, option);
        super(option);
    }
    name = 'hue-rotate';
    displayName = '旋转';
}
/**
 * 透明度 value: 0-1
 */
export class OpacityFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 0.8 }, option);
        super(option);
    }
    name = 'opacity';
    displayName = '透明度';
}
/**
 * 阴影滤镜
 */
export class DropShadowFilter extends Filter {
    constructor(option) {
        if (!option)
            option = new ShadowFilterOption();
        option.value = new ShadowFilterOptionValue(option.value || {
            x: '0',
            y: '0',
            blur: '4px',
            color: '#000'
        });
        super(option);
    }
    name = 'drop-shadow';
    displayName = '阴影';
    /**
      * 创建同类型的滤镜
      * @param option 滤镜参数
      * @returns
      */
    create(option = this.option, name = this.name, displayName = this.displayName) {
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
    constructor(option) {
        option = Object.assign({ value: 2 }, option);
        super(option);
    }
    name = 'contrast';
    displayName = '对比度';
}
/**
 * 饱和度 0-无穷 ,一般取0-1
 */
export class SaturateFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 3 }, option);
        super(option);
    }
    name = 'saturate';
    displayName = '饱和度';
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
// 获取fiter实例对象
export function get(name) {
    if (!name)
        return null;
    if (filters[name])
        return filters[name];
    for (const key in filters) {
        const filter = filters[key];
        if (filter instanceof Filter && filter.name === name) {
            return filter;
        }
    }
    return null;
}
export default filters;
