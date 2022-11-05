package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Integer> {
    UserModel findByUsername(String username);
}
