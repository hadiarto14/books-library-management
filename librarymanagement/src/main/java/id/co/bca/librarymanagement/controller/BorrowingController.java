package id.co.bca.librarymanagement.controller;

import id.co.bca.librarymanagement.model.BorrowingModel;
import id.co.bca.librarymanagement.model.RequestBorrowingModel;
import id.co.bca.librarymanagement.repository.BookRepository;
import id.co.bca.librarymanagement.repository.BorrowingRepository;
import id.co.bca.librarymanagement.repository.RequestBorrowingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class BorrowingController {
    @Autowired
    BorrowingRepository borrowingRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    RequestBorrowingRepository requestBorrowingRepository;

    @GetMapping("/borrowing")
    @ResponseStatus(HttpStatus.OK)
    public List<BorrowingModel> findAll(){
        return borrowingRepository.findAll();
    }

    @GetMapping("/borrowing/{id}")
    @ResponseStatus(HttpStatus.OK)
    public BorrowingModel findBorrowingById(@PathVariable("id") int id){
        return borrowingRepository.findById(id).get();
    }

    @PostMapping("/borrowing")
    @ResponseStatus(HttpStatus.OK)
    public RequestBorrowingModel addBorrowing (@RequestBody RequestBorrowingModel borrow){
        return requestBorrowingRepository.save(borrow);
    }

    @PutMapping("/borrowing/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RequestBorrowingModel updateBorrowing(@RequestBody RequestBorrowingModel borrow, @PathVariable("id") int id){
        borrow.setId(id);
        return requestBorrowingRepository.save(borrow);
    }

    @DeleteMapping("/borrowing/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBorrowing(@PathVariable("id") int id) {
        borrowingRepository.deleteById(id);
    }
}
