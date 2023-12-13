import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '9bdw1vch',
    dataset: 'production',
    apiVersion: '2023-12-05',
    useCdn: true,
    token: 'skIV8qANRu1gLIQJUf68SbSuDIwdxczCodJHAdgSEANnEOVZWsCZMerlVdywa6vaEqi90GtNiTkquomCVvHzeByEtEfM63nOVDVR9XcKlyMtly3ZfZtXOFasAN0wvAzSrk8a70HHEEhjZZziZi6oRaSX3GE4FoiQFJSaTZ6q9OOpUHbcVmgH'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);