
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdvertController {

	private AdverService advertService;
	
	public AdvertController(AdvertService advertService) {
		this.advertService = advertService;
	}
	
	@RequestMapping(value="advert/add" , method=RequestMethod.POST)
}
