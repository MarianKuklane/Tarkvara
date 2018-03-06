import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class AdvertService {

    @Autowired
    private AdvertRepository advertRepository;

    public Student getAdvertById(long id){
        return this.advertRepository.getAdvertById(id);
    }

    public void removeAdvertById(int id) {
        this.advertRepository.removeAdvertById(id);
    }

    public void updateAdvert(Advert advert){
        this.advertRepository.updateAdvert(advert);
    }

    public void insertAdvert(Advert advert) {
        this.advertRepository.insertAdvertToDb(advert);
    }
}