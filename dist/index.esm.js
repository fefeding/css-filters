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
        return this.value + '';
    }
    toJSON() {
        return {
            value: this.value
        };
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
    create(option, name = this.name, displayName = this.displayName) {
        const data = new FilterData();
        data.name = name;
        data.displayName = displayName;
        data.option = option || this.option;
        const obj = new Filter(data);
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

class CSSFilters {
    constructor(filters) {
        if (filters && filters.length) {
            this.filters.push(...filters);
        }
    }
    // 所有支持的滤镜
    filters = new Array();
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
    add(filter) {
        if (Array.isArray(filter)) {
            for (const f of filter) {
                this.add(f);
            }
            return;
        }
        else if (typeof filter === 'string') {
            const filterObj = filters[filter];
            if (!filterObj) {
                console.error(`${filter}不存在`);
            }
            return this.add(filterObj);
        }
        const existsFilter = this.get(filter.name);
        if (existsFilter) {
            console.error(`${filter.name}已经存在滤镜集合中，不能重复`);
            return;
        }
        this.filters.push(filter);
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
}

export { BaseFilterOption, FilterData, CSSFilters as default, filters };
