package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.RequestReturnBookModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestReturnBookRepository extends JpaRepository<RequestReturnBookModel, Integer> {

}
