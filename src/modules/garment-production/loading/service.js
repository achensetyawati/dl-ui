import { RestService } from '../../../utils/rest-service';

const serviceUri = 'loadings';
const serviceUriSewingDO = 'sewing-dos';

class Service extends RestService {
    constructor(http, aggregator, config, endpoint) {
        super(http, aggregator, config, "garment-production");
    }

    search(info) {
        var endpoint = `${serviceUri}`;
        return super.list(endpoint, info);
    }

    create(data) {
        var endpoint = `${serviceUri}`;
        return super.post(endpoint, data);
    }

    read(id) {
        var endpoint = `${serviceUri}/${id}`;
        return super.get(endpoint);
    }

    update(data) {
        var endpoint = `${serviceUri}/${data.Id}`;
        console.log(data, endpoint)
        return super.put(endpoint, data);
    }

    delete(data) {
        var endpoint = `${serviceUri}/${data.Id}`;
        return super.delete(endpoint, data);
    }

    getSewingDObyId(id) {
        var endpoint = `${serviceUriSewingDO}/${id}`;
        return super.get(endpoint);
    }

}

export { Service }