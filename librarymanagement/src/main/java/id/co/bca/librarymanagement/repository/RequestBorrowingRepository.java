package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.RequestBorrowingModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestBorrowingRepository extends JpaRepository<RequestBorrowingModel, Integer> {
}
