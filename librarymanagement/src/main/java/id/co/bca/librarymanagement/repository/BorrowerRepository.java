package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.BorrowerModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowerRepository extends JpaRepository<BorrowerModel, Integer> {
}
