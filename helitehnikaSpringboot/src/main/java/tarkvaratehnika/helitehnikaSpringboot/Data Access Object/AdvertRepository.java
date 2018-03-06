public class AdvertRepository {
	
	 	Advert getAdvertById(long id);

	    void removeAdvertById(long id);

	    void updateAdvert(Advert advert);

	    void insertAdvertToDb(Advert advert);
	    
}
