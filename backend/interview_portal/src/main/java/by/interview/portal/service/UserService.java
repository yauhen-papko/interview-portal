package by.interview.portal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.lang.NonNull;

import by.interview.portal.domain.User;

public interface UserService {

    List<User> findAll();

    void save(User user);

    Optional<User> findById(long userId);

    @NonNull
    Optional<User> findUserByLogin(@NonNull String login);
}
