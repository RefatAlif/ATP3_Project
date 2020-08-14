
    <?php
    function MyFunction($url){
      $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n")); //Basically adding headers to the request
      $context = stream_context_create($opts);

      $data=file_get_contents($url);

      $first=explode('data: ',$data);
      $second=explode('csrfToken:',$first[1]);
      $script=$second[0];
      //echo $taka;
      return $script;
      }
    }
     ?>
