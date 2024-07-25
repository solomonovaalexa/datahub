package com.linkedin.metadata.models.annotation;

import javax.annotation.Nonnull;
import lombok.AllArgsConstructor;
import lombok.Value;

/** Simple object representation of the @Reference annotation metadata. */
@Value
@AllArgsConstructor
public class ReferenceAnnotation {

  @Nonnull
  public static RelationshipAnnotation fromPegasusAnnotationObject() {
    return null;
  }
}
