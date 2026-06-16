module.exports = {
async getStreams(id) {
console.log("Received:", id);

```
return [
  {
    name: "BWARC Test",
    title: "Test Stream 1080p",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    quality: "1080p"
  }
];
```

}
};
