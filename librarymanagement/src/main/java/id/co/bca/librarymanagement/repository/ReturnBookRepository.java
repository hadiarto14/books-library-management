package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.ReturnBookModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReturnBookRepository extends JpaRepository<ReturnBookModel,  Integer> {
}
