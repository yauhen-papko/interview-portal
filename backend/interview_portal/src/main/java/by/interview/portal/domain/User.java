package by.interview.portal.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id", nullable = false, columnDefinition = "bigserial")
	private Long id;

	@Column(name = "name", nullable = false, length = 50)
	private String name;

	@Column(name = "surname", nullable = false, length = 50)
	private String surname;

	@Column(name = "password", nullable = false, length = 50)
	private String password;

	@Column(name = "phone_number", nullable = false, length = 50)
	private String phoneNumber;

	@Column(name = "login", unique = true, nullable = false, length = 50)
	private String login;

	@ManyToMany
	@JoinTable(name = "users_rdp", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "rdp_id") })
	private List<RoleDisciplinePermission> rdps;
}
