import org.springframework.data.repository.CrudRepository;

@Repository
public interface AdvertRepository extends CrudRepository<Advert, Long>{
	
}

