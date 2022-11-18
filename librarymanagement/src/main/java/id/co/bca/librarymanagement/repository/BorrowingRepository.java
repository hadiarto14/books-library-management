package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.BorrowingModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowingRepository extends JpaRepository<BorrowingModel, Integer> {
}
