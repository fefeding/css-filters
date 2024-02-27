/**
 * 滤镜数据
 */
export class FilterData {
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
export class BaseFilterOption {
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
export class ShadowFilterOptionValue {
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
export class ShadowFilterOption extends BaseFilterOption {
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
