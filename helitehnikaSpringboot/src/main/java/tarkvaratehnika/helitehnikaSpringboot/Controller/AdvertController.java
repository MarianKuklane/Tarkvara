import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdvertController {
	
	@Autowired
	private AdvertService advertService;
	
	@RequestMapping(value="advert/add", method=RequestMethod.POST)
	public AdvertController(AdvertService advertService) {
		this.advertService = advertService;
	}
	
    @RequestMapping(value = "advert/{id}", method = RequestMethod.GET)
    public Advert getAdvertById(@PathVariable("id") long id){
        return advertService.getAdvertById(id);
    }

    @RequestMapping(value = "advert/{id}", method = RequestMethod.DELETE)
    public void deleteAdvertById(@PathVariable("id") long id){
        advertService.removeAdvertById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateAdvertById(@RequestBody Advert advert){
        advertService.updateAdvert(advert);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void insertAdvert(@RequestBody Advert advert){
        advertService.insertAdvert(advert);
    }
}
