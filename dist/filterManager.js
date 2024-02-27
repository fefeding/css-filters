import cssFilters, { Filter } from './filters';
export default class CSSFilters {
    constructor(target, filters) {
        if (filters && filters.length) {
            this.filters.push(...filters);
        }
        if (target)
            this.target = target;
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
            const filterObj = cssFilters[filter];
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
