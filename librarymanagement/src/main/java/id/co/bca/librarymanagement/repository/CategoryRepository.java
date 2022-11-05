package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.CategoryModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryModel, Integer> {
}
