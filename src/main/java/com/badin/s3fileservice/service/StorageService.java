package com.badin.s3fileservice.service;

import com.amazonaws.services.s3.model.S3ObjectSummary;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StorageService {
    String uploadFile(MultipartFile multipartFile);
    List<S3ObjectSummary> getFileList();
    byte[] downloadFile(String fileName) throws IOException;
}
