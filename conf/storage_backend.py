from storages.backends.s3boto3 import S3Boto3Storage


class PublicMediaStorage(S3Boto3Storage):
    location = 'media'
    file_overwrite = False
    default_acl = 'public-read'

class PublicMediaStorageLittleSigns(S3Boto3Storage):
    location = 'little-signs'
    file_overwrite = False
    default_acl = 'public-read'