package com.referral.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

@Data
public class Test implements Serializable {
    
	private static final long serialVersionUID = -5426515093048253118L;

	@JsonProperty("title")
    private String title;

    @JsonProperty("content")
    private String content;

    private UUID id;

    public Test(String title, String content) {
        this.id = UUID.randomUUID();
        this.title = title;
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}
    
}
