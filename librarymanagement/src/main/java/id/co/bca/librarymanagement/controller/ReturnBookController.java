package id.co.bca.librarymanagement.controller;

import id.co.bca.librarymanagement.model.CategoryModel;
import id.co.bca.librarymanagement.model.RequestBorrowingModel;
import id.co.bca.librarymanagement.model.RequestReturnBookModel;
import id.co.bca.librarymanagement.model.ReturnBookModel;
import id.co.bca.librarymanagement.repository.RequestReturnBookRepository;
import id.co.bca.librarymanagement.repository.ReturnBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class ReturnBookController {
    @Autowired
    ReturnBookRepository returnBookRepository;

    @Autowired
    RequestReturnBookRepository requestReturnBookRepository;

    @GetMapping("/returnbook")
    @ResponseStatus(HttpStatus.OK)
    public List<ReturnBookModel> findAll(){
        return returnBookRepository.findAll();
    }

    @GetMapping("/returnbook/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ReturnBookModel findReturnBookById(@PathVariable("id") int id){
        return returnBookRepository.findById(id).get();
    }

    @PostMapping("/returnbook")
    @ResponseStatus(HttpStatus.OK)
    public RequestReturnBookModel addBReturnBook (@RequestBody RequestReturnBookModel returnbook){
        return requestReturnBookRepository.save(returnbook);
    }

    @PutMapping("/returnbook/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RequestReturnBookModel updateReturnBook(@RequestBody RequestReturnBookModel returnbook, @PathVariable("id") int id){
        returnbook.setId(id);
        return requestReturnBookRepository.save(returnbook);
    }

    @DeleteMapping("/returnbook/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteReturnBook(@PathVariable("id") int id) {
        returnBookRepository.deleteById(id);
    }
}
