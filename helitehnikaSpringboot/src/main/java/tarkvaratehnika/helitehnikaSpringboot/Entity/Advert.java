	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.Id;

	import lombok.Getter;
	import lombok.Setter;

	@Entity
	@Getter
	@Setter
public class Advert {

	@Id
	@GeneratedValue

	long id;
	String title;
	String description;
	double price;
	String email;
	String phone;
	String category;
	String subcategory;
	}
