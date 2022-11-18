package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.RequestBookModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestBookRepository extends JpaRepository<RequestBookModel, Integer> {
}
