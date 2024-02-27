import { IFilter, FilterData, BaseFilterOption, IBaseFilterOption, ShadowFilterOption, ShadowFilterOptionValue } from './filterTypes';
export declare class Filter implements IFilter {
    constructor(option?: BaseFilterOption | FilterData);
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
    create(option?: IBaseFilterOption, name?: string, displayName?: string, filterType?: typeof Filter): Filter;
    toJSON(): FilterData;
    toString(): string;
}
/**
 * 反色滤镜
 */
export declare class InvertFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName: string;
}
/**
 * 模糊滤镜 value: 4px
 */
export declare class BlurFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName?: string;
}
/**
 * 亮度滤镜 value: 0-100
 */
export declare class BrightnessFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName?: string;
}
/**
 * 灰度滤镜 value: 0-1
 */
export declare class GrayscaleFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName?: string;
}
/**
 * 复古滤镜 value: 0-1
 */
export declare class SepiaFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName?: string;
}
/**
 * 旋转滤镜 value: 0-360deg 角度 或 弧度 0-2*Math.PI rad
 */
export declare class HueRotateFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName?: string;
}
/**
 * 透明度 value: 0-1
 */
export declare class OpacityFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName?: string;
}
/**
 * 阴影滤镜
 */
export declare class DropShadowFilter extends Filter {
    constructor(option?: ShadowFilterOption);
    name: string;
    displayName?: string;
    value: ShadowFilterOptionValue;
    /**
      * 创建同类型的滤镜
      * @param option 滤镜参数
      * @returns
      */
    create(option?: ShadowFilterOption, name?: string, displayName?: string): DropShadowFilter;
}
/**
 * 对比度滤镜  value: 2
 */
export declare class ContrastFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName?: string;
}
/**
 * 饱和度滤镜  value: 3
 */
export declare class SaturateFilter extends Filter {
    constructor(option?: IBaseFilterOption);
    name: string;
    displayName?: string;
}
declare const filters: {
    /**
     * 反色滤镜
     */
    invert: InvertFilter;
    /**
     * 亮度
     */
    blur: BlurFilter;
    /**
     * 亮度
     */
    brightness: BrightnessFilter;
    /**
     * 灰度
     */
    grayscale: GrayscaleFilter;
    /**
     * 复古
     */
    sepia: SepiaFilter;
    /**
     * 旋转滤镜
     */
    hueRotate: HueRotateFilter;
    /**
     * 阴影
     */
    dropShadow: DropShadowFilter;
    /**
     * 透明度
     */
    opacity: OpacityFilter;
    /**
     * 对比度
     */
    contrast: ContrastFilter;
    /**
     * 饱和度
     */
    saturate: SaturateFilter;
};
export default filters;
