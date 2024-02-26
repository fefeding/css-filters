class BaseFilterOption {
    constructor(option) {
        if (option) {
            this.value = option.value;
        }
    }
    value;
    toString() {
        return this.value;
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
            if (option instanceof BaseFilterOption) {
                this.option = option;
            }
            else {
                this.name = option.name;
                this.displayName = option.displayName;
                if (option.option) {
                    if (option.option instanceof BaseFilterOption) {
                        this.option = option.option;
                    }
                    else {
                        this.option = new BaseFilterOption(option.option);
                    }
                }
            }
        }
    }
    name;
    displayName;
    /**
    * 配置值
    */
    option;
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
const filters = {
    InvertFilter: new Filter({
        value: '1'
    }),
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

export { BaseFilterOption, CSSFilters as default, filters };
