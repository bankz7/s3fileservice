package com.badin.s3fileservice.controller;

import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.badin.s3fileservice.service.StorageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/files")
public class AWSController {
    @Autowired
    StorageServiceImpl storageService;

    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile multipartFile) {
        return storageService.uploadFile(multipartFile);
    }

    @GetMapping("/")
    public List<S3ObjectSummary> getFileList() {
        return storageService.getFileList();
    }

    @GetMapping("/download/{filename}")
    public ResponseEntity<ByteArrayResource> download(@PathVariable("filename") String fileName){
        try {
            byte[] data = storageService.downloadFile(fileName);
            ByteArrayResource byteArrayResource = new ByteArrayResource(data);
            return ResponseEntity.ok().contentLength(data.length).contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .header("Content-disposition", "attachment; filename=\""+fileName+"\"").body(byteArrayResource);

        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
