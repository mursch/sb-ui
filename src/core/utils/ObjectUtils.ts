export class ObjectUtils {

  private static _seq = 0;

  static nextId(): string {
    return `${++ObjectUtils._seq}`;
  }

	static clone(data: any): any {
		return JSON.parse(JSON.stringify(data));
	}

	static merge(dest: Object, src: Object): Object {
		if (ObjectUtils.isBlank(src)) {
			return dest;
		}
		if (ObjectUtils.isBlank(dest)) {
			return src;
		}
		for (let prop in src) {
      if (src.hasOwnProperty(prop)) {
        dest[prop] = src[prop];
      }
    }
    return dest;
	}

	static isPresent(data: any): boolean {
		return !ObjectUtils.isBlank(data);
	}

	static isBlank(data: any): boolean {
		return data === undefined || data === null;
	}
}
