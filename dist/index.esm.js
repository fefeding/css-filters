/**
 * 滤镜数据
 */
class FilterData {
    /**
     * 名称
     */
    name;
    /**
     * 中文名
     */
    displayName;
    /**
     * 配置值
     */
    option;
}
class BaseFilterOption {
    constructor(option) {
        if (option) {
            if (typeof option === 'string' || typeof option === 'number') {
                this.value = option;
            }
            else {
                this.value = option.value;
            }
        }
    }
    value;
    toString() {
        return this.value.toString();
    }
    toJSON() {
        return {
            value: this.value
        };
    }
    clone() {
        const obj = new BaseFilterOption();
        // @ts-ignore
        if (this.value && this.value.clone)
            obj.value = this.value.clone();
        else
            obj.value = this.value;
        return obj;
    }
}
class ShadowFilterOptionValue {
    constructor(data) {
        if (data) {
            this.x = data.x;
            this.y = data.y;
            this.blur = data.blur;
            this.color = data.color;
        }
    }
    x;
    y;
    blur;
    color;
    toJSON() {
        return {
            x: this.x,
            y: this.y,
            blur: this.blur || '',
            color: this.color || ''
        };
    }
    toString() {
        return `${this.x} ${this.y} ${this.blur || 0} ${this.color || '#000'}`;
    }
    clone() {
        return new ShadowFilterOptionValue(this);
    }
}
class ShadowFilterOption extends BaseFilterOption {
    constructor(option) {
        super();
        if (option) {
            // @ts-ignore
            if (option instanceof ShadowFilterOption || option.value)
                this.value = new ShadowFilterOptionValue(option.value);
            else
                this.value = new ShadowFilterOptionValue(option);
        }
    }
    toString() {
        return this.value.toString();
    }
}

class Filter {
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
class InvertFilter extends Filter {
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
class BlurFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: '4px' }, option);
        super(option);
    }
    name = 'blur';
    displayName = '模糊';
}
/**
 * 亮度滤镜 value: 0-100
 */
class BrightnessFilter extends Filter {
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
class GrayscaleFilter extends Filter {
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
class SepiaFilter extends Filter {
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
class HueRotateFilter extends Filter {
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
class OpacityFilter extends Filter {
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
class DropShadowFilter extends Filter {
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
class ContrastFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 2 }, option);
        super(option);
    }
    name = 'contrast';
    displayName = '对比度';
}
/**
 * 饱和度滤镜  value: 3
 */
class SaturateFilter extends Filter {
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
     * 饱和度
     */
    saturate: new SaturateFilter(),
};

class CSSFilters {
    constructor(target, filters) {
        if (target)
            this.target = target;
        if (filters && filters.length) {
            this.add(filters);
        }
    }
    // 所有支持的滤镜
    filters = new Array();
    /**
     * 绑定的dom否元素对象
     */
    target;
    /**
     * 当前滤镜个数
     */
    get count() {
        return this.filters.length;
    }
    /**
     * 根据滤镜名获取滤镜对象
     * @param name
     * @returns
     */
    get(name) {
        for (const f of this.filters) {
            if (f.name === name)
                return f;
        }
    }
    clear() {
        this.filters.splice(0, this.filters.length);
    }
    /**
     * 添加滤镜
     * @param filter
     */
    add(filter, option) {
        if (Array.isArray(filter)) {
            for (const f of filter) {
                this.add(f, option);
            }
            return;
        }
        else if (typeof filter === 'string') {
            const filterObj = filters[filter];
            if (!filterObj) {
                console.error(`${filter}不存在`);
                return;
            }
            filter = filterObj.create(option || filterObj.option);
            return this.add(filter);
        }
        if (filter.name) {
            const existsFilter = this.get(filter.name);
            if (existsFilter) {
                console.error(`${filter.name}已经存在滤镜集合中，不能重复`);
                return;
            }
        }
        if (filter instanceof Filter) {
            this.filters.push(filter);
            this.apply();
            return;
        }
        else if (filter.name) {
            return this.add(filter.name, filter.option);
        }
    }
    /**
     * 移除滤镜
     * @param filter
     */
    remove(filter) {
        if (Array.isArray(filter)) {
            for (const f of filter)
                this.remove(f);
        }
        else {
            for (let i = this.filters.length - 1; i >= 0; i--) {
                if ((typeof filter === 'string' && this.filters[i].name === filter) || this.filters[i] === filter) {
                    this.filters.splice(i, 1);
                }
            }
        }
        this.apply();
    }
    toJSON() {
        const res = [];
        if (this.count) {
            for (const f of this.filters) {
                res.push(f.toJSON());
            }
        }
        return res;
    }
    toString() {
        const res = [];
        for (const f of this.filters) {
            const r = f.toString();
            if (r)
                res.push(r);
        }
        if (res.length)
            return res.join(' ');
        return '';
    }
    /**
     * 生效
     * @param target
     */
    apply(target = this.target) {
        if (target && target.style)
            target.style.filter = this.toString();
    }
}

export { BaseFilterOption, FilterData, ShadowFilterOption, ShadowFilterOptionValue, CSSFilters as default, filters };
