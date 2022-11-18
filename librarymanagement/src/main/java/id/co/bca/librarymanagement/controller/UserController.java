package id.co.bca.librarymanagement.controller;

import com.mysql.cj.xdevapi.Collection;
import id.co.bca.librarymanagement.model.CategoryModel;
import id.co.bca.librarymanagement.model.UserModel;
import id.co.bca.librarymanagement.payload.JwtResponse;
import id.co.bca.librarymanagement.repository.UserRepository;
import id.co.bca.librarymanagement.service.MyUserDetailService;
import id.co.bca.librarymanagement.util.JwtUtil;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateUser(@RequestBody UserModel authRequest) throws Exception {
        String jwt;
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
            jwt = jwtUtil.generateToken(authRequest.getUsername());

            System.out.println(authentication);

        } catch (Exception ex) {
            throw new Exception("inavalid username/password");
        }


        return ResponseEntity.ok(new JwtResponse(jwt,authRequest.getUsername(),authRequest.getRole()));
    }

    @GetMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    public List<UserModel> findAll(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserModel findUserById(@PathVariable("id") int id){
        return userRepository.findById(id).get();
    }

    @GetMapping(value = "/userRole", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Object> findUserByUsername(@RequestParam(value = "username") String username){
        String response = userRepository.findByUsername(username).getRole();
        Map<String, Object> rtn = new LinkedHashMap<>();
        rtn.put("role", response);
        return rtn;
    }

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    public UserModel addUser (@RequestBody UserModel user){
        String encodePassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodePassword);
        return userRepository.save(user);
    }

    @PutMapping("/users/{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserModel updateUser(@RequestBody UserModel user, @PathVariable("id") int id){
        user.setId(id);
        return userRepository.save(user);
    }

    @DeleteMapping("/users/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable("id") int id) {
        userRepository.deleteById(id);
    }
}
