<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Cache;

/**
 * Class General
 * A utility class for managing application level common operations.
 *
 * This class provides methods to interact to application at
 * on very top of the layer and very bottom of the layer also.
 */
class General
{
    /**
     * Cache key prefix used to standardize and avoid key collisions.
     *
     * @var string
     */
    public static $cache_key_prefix = '_wisendocs_cache_';

    /**
     * Generate a standardized cache key with the defined prefix.
     *
     * This method appends the provided key to the predefined cache key prefix
     * to ensure that all cache keys are unique and consistent across the application.
     *
     * @param string $key The original key to be used for the cache.
     * @return string The fully qualified cache key with the prefix applied.
     */
    public static function _getCacheKey(string $key): string
    {
        return self::$cache_key_prefix . $key;
    }

    /**
     * Store a value in the cache.
     *
     * @param string $key The cache key.
     * @param mixed $value The value to store.
     * @param int|null $ttl Time-to-live in seconds (optional). Defaults to Laravel's configuration.
     * @return bool True if the cache was successfully stored, false otherwise.
     */
    public static function cache(string $key, $value, int $ttl = null): bool
    {
        return Cache::put(self::_getCacheKey($key), $value, $ttl);
    }

    /**
     * Cache a value forever until it is manually cleared.
     *
     * If the cache key already exists, the cached value is returned.
     * Otherwise, the callback is executed, its return value is cached, and then returned.
     *
     * @param string $key The cache key.
     * @param callable $callback The callback to generate the value if not cached.
     * @return mixed The cached value or the generated value from the callback.
     */
    public static function cacheForever(string $key, callable $callback)
    {
        // Use Cache::rememberForever to handle caching and return the stored value
        return Cache::rememberForever(self::_getCacheKey($key), $callback);
    }

    /**
     * Retrieve a value from the cache.
     *
     * @param string $key The cache key.
     * @param mixed $default The default value to return if the key doesn't exist.
     * @return mixed The cached value or the default value.
     */
    public static function cached(string $key, $default = null)
    {
        return Cache::get(self::_getCacheKey($key), $default);
    }

    /**
     * Refresh a cached value by clearing the existing cache and storing a new value.
     *
     * @param string $key The cache key.
     * @param mixed $value The new value to store.
     * @param int|null $ttl Time-to-live in seconds (optional). Defaults to Laravel's configuration.
     * @return bool True if the cache was successfully refreshed, false otherwise.
     */
    public static function refreshCached(string $key, $value, int $ttl = null): bool
    {
        self::clearCached(self::_getCacheKey($key));

        return self::cache(self::_getCacheKey($key), $value, $ttl);
    }

    /**
     * Remove a specific cache key.
     *
     * @param string $key The cache key to remove.
     * @return bool True if the cache key was successfully removed, false otherwise.
     */
    public static function clearCached(string $key): bool
    {
        return Cache::forget(self::_getCacheKey($key));
    }

    /**
     * Clear all cache data.
     *
     * @return void
     */
    public static function clearAllCache(): void
    {
        Cache::flush();
    }
}