package com.linkedin.metadata.models;

import com.linkedin.data.schema.DataSchema;
import com.linkedin.data.schema.PathSpec;
import com.linkedin.metadata.models.annotation.ReferenceAnnotation;
import lombok.NonNull;
import lombok.Value;


@Value
public class ReferenceFieldSpec implements FieldSpec {

  @NonNull PathSpec path;
  @NonNull ReferenceAnnotation referenceAnnotation;
  @NonNull DataSchema pegasusSchema;

  public boolean isArray() {
    return path.getPathComponents().contains("*");
  }
}
