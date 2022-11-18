package id.co.bca.librarymanagement.controller;

import id.co.bca.librarymanagement.model.BookModel;
import id.co.bca.librarymanagement.model.CategoryModel;
import id.co.bca.librarymanagement.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class CategoryController {
    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/categories")
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryModel> findAll(){
        return categoryRepository.findAll();
    }

    @GetMapping("/categories/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoryModel findCategoryById(@PathVariable("id") int id){
        return categoryRepository.findById(id).get();
    }

    @PostMapping("/categories")
    @ResponseStatus(HttpStatus.OK)
    public CategoryModel addCategory (@RequestBody CategoryModel category){
        return categoryRepository.save(category);
    }

    @PutMapping("/categories/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoryModel updateCategory(@RequestBody CategoryModel category, @PathVariable("id") int id){
        category.setId(id);
        return categoryRepository.save(category);
    }

    @DeleteMapping("/categories/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteCategory(@PathVariable("id") int id) {
        categoryRepository.deleteById(id);
    }
}
